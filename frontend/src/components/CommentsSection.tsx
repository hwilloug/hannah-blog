import { useAuth0 } from "@auth0/auth0-react";
import { Chip, styled, TextareaAutosize } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { Suspense, useEffect, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Comment, mapRespToArticle } from "..";
import Loading from "./Loading";
import { ContainerContainer, StyledButton } from "./StyledComponents";

const CommentsContainerContainer = styled(ContainerContainer)({
  marginBottom: "50px",
});

const CommentsContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  padding: "20px",
  borderRadius: "5px",
}));

const CommentContainer = styled("div")(({ theme }) => ({
  border: "1px solid black",
  boxShadow: "2px 2px grey",
  padding: "10px",
  margin: "10px",
}));

const TextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  marginBottom: "10px",
}));

const CommentsSection: React.FunctionComponent = () => {
  const data = useLoaderData() as { article: Promise<AxiosResponse<any, any>> };
  const { isAuthenticated, loginWithPopup, user, getIdTokenClaims } =
    useAuth0();

  const [commentBody, setCommentBody] = useState("");
  const [replyBody, setReplyBody] = useState("");
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState<Comment>();
  const [newReply, setNewReply] = useState<Comment>();

  useEffect(() => {
    const getUsername = async () => {
      if (isAuthenticated && user) {
        const claims = await getIdTokenClaims();
        if (claims) {
          setUsername(claims["hannahshobbyroom.com/username"]);
        }
      }
    };
    getUsername();
  }, [isAuthenticated, user]);

  const loginPartial = (
    <>
      <StyledButton onClick={() => loginWithPopup()}>
        Log in to post a comment!
      </StyledButton>
    </>
  );

  return (
    <CommentsContainerContainer>
      <CommentsContainer>
        <h3>Comments</h3>
        <Suspense fallback={<Loading />}>
          <Await
            resolve={data.article}
            errorElement={<p>Error loading comments!</p>}
          >
            {(resp) => {
              if (resp === undefined) {
                return <p>404 not found??</p>;
              }

              const article = mapRespToArticle(resp.data);

              const postComment = async (slug: string, parentId: string) => {
                if (commentBody.length) {
                  try {
                    await axios.post(
                      `${process.env.REACT_APP_API_URL}/comments`,
                      {
                        article_slug: slug,
                        username: username,
                        comment_body: commentBody,
                      },
                    );
                    setNewComment({
                      id: "new_comment",
                      timestamp: new Date().toString(),
                      body: commentBody,
                      username: username,
                      articleSlug: article.slug,
                    });
                    setCommentBody("");
                  } catch (e) {
                    console.log("error posting comment", e);
                  }
                }
              };

              const postReply = async (slug: string, parentId: string) => {
                if (replyBody.length) {
                  try {
                    console.log({
                      article_slug: slug,
                      username: username,
                      comment_body: replyBody,
                      parent_id: parentId
                    })
                    await axios.post(
                      `${process.env.REACT_APP_API_URL}/comments`,
                      {
                        article_slug: slug,
                        username: username,
                        comment_body: replyBody,
                        parent_id: parentId
                      },
                    );
                    setNewReply({
                      id: "new_comment",
                      timestamp: new Date().toString(),
                      body: replyBody,
                      username: username,
                      articleSlug: article.slug,
                    });
                    setReplyBody("");
                  } catch (e) {
                    console.log("error posting comment", e);
                  }
                }
              }

              if (article.comments.length) {
                return (
                  <>
                    {article.comments.map((comment) => {
                      return (<>
                      <CommentComponent comment={comment} isAuthenticated={isAuthenticated} replyBody={replyBody} setReplyBody={setReplyBody} postComment={postReply}  />
                        {
                          comment.children?.map((child) => {
                            return <CommentComponent comment={child} child={true} isAuthenticated={isAuthenticated} replyBody={replyBody} setReplyBody={setReplyBody} postComment={postReply} />
                          })
                        }
                      </>)
                    })}
                    {newComment && (
                      <CommentComponent comment={newComment} isAuthenticated={isAuthenticated} replyBody={replyBody} setReplyBody={setReplyBody} postComment={postComment} />
                    )}
                    {isAuthenticated ? <MakeComment article_slug={article.slug} commentBody={commentBody} setCommentBody={setCommentBody} postComment={postComment} /> : loginPartial}
                  </>
                );
              } else {
                return (
                  <>
                    <p>No comments yet!</p>
                    {isAuthenticated ? <MakeComment article_slug={article.slug} commentBody={commentBody} setCommentBody={setCommentBody} postComment={postComment} /> : loginPartial}
                  </>
                );
              }
            }}
          </Await>
        </Suspense>
      </CommentsContainer>
    </CommentsContainerContainer>
  );
};

export default CommentsSection;

const MakeComment: React.FC<{article_slug: string, commentBody: string, setCommentBody: Function, postComment: Function, parentId?: string}> = ({commentBody, setCommentBody, postComment, article_slug, parentId}) => {
  return (
      <>
        <h4>Post a comment</h4>
        <TextArea
          minRows={4}
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <StyledButton onClick={() => postComment(article_slug, parentId)}>
          Post Comment
        </StyledButton>
      </>
  )
}

const ReplyContainer = styled("p")({
  textAlign: "end",
  marginRight: "10px"
})

const CommentComponent: React.FC<{comment: Comment, child?: boolean, replyBody: string, setReplyBody: Function, postComment: Function, isAuthenticated: boolean}> = ({comment, child, replyBody, setReplyBody, postComment, isAuthenticated}) => {
  const [reply, setReply] = useState(false)

  return (
    <CommentContainer style={child ? {marginLeft: "75px"} : {}}>
      <h4>{comment.username} {comment.username === "hannahwilloughby" && <Chip variant="outlined" color="warning" label="Author" sx={{ml: "10px"}}></Chip>}</h4>
      <h5>{new Date(comment.timestamp).toLocaleString()}</h5>
      <hr />
      <p style={{lineHeight: "1.75"}}>{comment.body}</p>
      {!child && !reply && isAuthenticated && <ReplyContainer onClick={() => setReply(true)}>Reply</ReplyContainer>}
      {reply && <MakeComment article_slug={comment.articleSlug} commentBody={replyBody} setCommentBody={setReplyBody} postComment={postComment} parentId={comment.id} />}
    </CommentContainer>
  )
}