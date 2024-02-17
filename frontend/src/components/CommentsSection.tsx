import { useAuth0 } from "@auth0/auth0-react";
import { styled, TextareaAutosize } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { mapRespToArticle } from "..";
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
  const { isAuthenticated, loginWithPopup, user } = useAuth0();

  const [commentBody, setCommentBody] = useState("");

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

              const postComment = async (slug: string) => {
                if (commentBody.length) {
                  try {
                    await axios.post(
                      `${process.env.REACT_APP_API_URL}/comments`,
                      {
                        article_slug: slug,
                        user_id: user?.sub,
                        comment_body: commentBody,
                      },
                    );
                    setCommentBody("");
                  } catch (e) {
                    console.log("error posting comment", e);
                  }
                }
              };

              const makeCommentPartial = (
                <>
                  <h4>Post a comment</h4>
                  <TextArea
                    minRows={4}
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                  />
                  <StyledButton onClick={() => postComment(article.slug)}>
                    Post Comment
                  </StyledButton>
                </>
              );

              if (article.comments.length) {
                return (
                  <>
                    {article.comments.map((comment) => (
                      <CommentContainer>
                        <h4>User Id: {comment.userId}</h4>
                        <h5>{new Date(comment.timestamp).toLocaleString()}</h5>
                        <hr />
                        <p>{comment.body}</p>
                      </CommentContainer>
                    ))}
                    {isAuthenticated ? makeCommentPartial : loginPartial}
                  </>
                );
              } else {
                return (
                  <>
                    <p>No comments yet!</p>
                    {isAuthenticated ? makeCommentPartial : loginPartial}
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
