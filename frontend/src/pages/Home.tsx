import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { BodyContainer } from "../components/StyledComponents";

const WelcomeBanner = styled.div`
    border: 1px solid black;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    background-color: white;
`

const Title = styled.span`
    font-size: 60px;
`

const SectionTitle = styled.span`
    background-color: grey;
    font-size: 24px;
    width: 35rem;
    text-align: center;
    margin-top: 20px;
`

const LatestArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    border: 1px solid black;
    width: 35rem;
    padding: 10px;
    background-color: white;
`

const ArticleDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ArticleTitle = styled.span`
    font-size: 24px;
`

const ArticleSubtitle = styled.span`
    font-size: 18px;
`

const ArticleLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const ArticleImage = styled.img`
    width: 10rem;
`

export interface Article {
    slug: string
    title: string
    subtitle: string
    img: string
    category: string
    subcategory: string[]
    createdAt: string
}

export const articles: Article[] = [
    {
        slug: "fried-porkchops",
        title: "Fried Porkchops",
        subtitle: "A delicious breakfast or great with curry or gravy.",
        img: "fried_porkchops_2.png",
        category: "Food",
        subcategory: ["Pork", "Breakfast", "Dinner", 'Recipe'],
        createdAt: "Tuesday, May 2, 2023 4:50 PM"
    },
    {
        slug: "smother-me-in-lemon-curd",
        title: "Smother Me In Lemon Curd",
        subtitle: "Recipes of things to make that pair well with lemon curd.",
        img: "lemon_curd.png",
        category: "Food",
        subcategory: ["Baking", "Lists"],
        createdAt: "Sunday, November 26, 2023 8:15 PM"
    },
    {
        slug: "summer-2023-garden",
        title: "Summer 2023 Garden",
        subtitle: "",
        img: "garden_boxes.png",
        category: "Gardening",
        subcategory: ["Raised Beds", "Companion Planting"],
        createdAt: "Monday, May 1, 2023 1:30 PM"
    },
    {
        slug: "building-a-pig-shelter",
        title: "Building a Pig Shelter",
        subtitle: "A shelter for my future piggies",
        img: "pig_shelter_4.png",
        category: "Gardening",
        subcategory: ["Pigs", "Livestock", "Woodworking"],
        createdAt: "Tuesday, May 2, 2023 3:40 PM"
    },
    {
        slug: "2024-spring-summer-garden-plan",
        title: "2024 Spring/Summer Garden Plan",
        subtitle: "Yet again, going overboard",
        img: "garden_2024.png",
        category: "Gardening",
        subcategory: ["Raised Beds", "Companion Planting", "Woodworking"],    
        createdAt: "Saturday, January 27, 2024 8:10 PM"
    },
    {
        slug: "making-curtains-and-valences",
        title: "Making Curtains & Valences",
        subtitle: "Getting to Know My Sewing Machine",
        img: "curtain_2.png",
        category: "Crafts",
        subcategory: ["Sewing", "DIY"],
        createdAt: "Saturday, January 27, 2024 7:13 PM"
    },
    {
        slug: 'i-built-an-arbor',
        title: "I Built An Arbor!",
        subtitle: "",
        img: "arbor_2.png",
        category: "Crafts",
        subcategory: ["Woodworking", "Easy Projects", "Backyard Projects"],
        createdAt: "Saturday, January 27, 2024 7:41 PM"
    },
    {
        slug: 'home-is-where-the-cake-is',
        title: "Home is Where the Cake Is",
        subtitle: "A surprise for my boyfriend who's moving in with me",
        img: "cake_home_3.png",
        category: "Crafts",
        subcategory: ["Cross Stitch"],
        createdAt: "Saturday, January 27, 2024 7:50 PM"
    },
    {
        slug: 'squirrel-sampler',
        title: "A Squirrel Sampler",
        subtitle: "A present for my mom",
        img: "squirrel_sampler_2.png",
        category: "Crafts",
        subcategory: ["Cross Stitch"],
        createdAt: "Saturday, January 27, 2024 7:55 PM"
    },
    {
        slug: 'fresh-baked-pies',
        title: "Fresh Baked Pies!",
        subtitle: "A present for my aunt!",
        img: "pies_2.png",
        category: "Crafts",
        subcategory: ["Cross Stitch"],
        createdAt: "Saturday, January 27, 2024 7:56 PM"
    },
    {
        slug: 'building-a-workbench',
        title: "Building a Workbench",
        subtitle: "So I can finally not work on the floor",
        img: "workbench_2.png",
        category: "Crafts",
        subcategory: ["Woodworking", "Easy Projects"],
        createdAt: "Sunday, January 28, 2024 2:24 PM"
    },
    {
        slug: 'connecting-a-django-backend-to-a-react-frontend-via-cloudfront-and-terraform',
        title: "Connecting a Django Backend to a React Frontend via Cloudfront and Terraform",
        subtitle: "",
        img: "tcahdotcom.png",
        category: "Coding",
        subcategory: ["React.js", "Django", "Web Development"],
        createdAt: "Tuesday, May 2, 2023 9:25 AM"
    },
    {
        slug: 'a-local-bands-website',
        title: "A Local Band's Website",
        subtitle: "NoseyNeighborBand.com",
        img: "noseyneighbor.png",
        category: "Coding",
        subcategory: ["React.js", "Web Development"],
        createdAt: "Friday, May 5, 2023 4:38 PM"
    },
    {
        slug: 'a-journaling-diary-website',
        title: "A Journaling/Diary Website",
        subtitle: "https://journal.poppyland.dev",
        img: "poppylandjournal.png",
        category: "Coding",
        subcategory: ["React.js", "Web Development", "AWS", "Serverless"],
        createdAt: "Thursday, November 16, 2023 11:19 AM"
    },
    {
        slug: 'drip-irrigation-via-raspberry-pi',
        title: "Drip Irrigation via Raspberry Pi",
        subtitle: "Lazily watering my plants",
        img: "poppylandraincloud.png",
        category: "Coding",
        subcategory: ["Raspberry Pi", "Gardening", "Drip Irrigation"],
        createdAt: "Thursday, November 16, 2023 11:20 AM"
    },
    {
        slug: 'jurassic-park-review',
        title: "Jurassic Park: A Review",
        subtitle: "I've got dinosaurs on the brain",
        img: "jurassic_park.png",
        category: "Books",
        subcategory: ["Book Review", "Fiction", "Science Fiction"],
        createdAt: "Sunday, July 18, 2021 11:25 AM"
    },
    {
        slug: 'thoughts-on-anne-of-green-gables',
        title: "Thoughts on Anne of Green Gables",
        subtitle: "A reminder that it's okay to be a romantic",
        img: "anne.png",
        category: "Books",
        subcategory: ["Book Review", "Fiction", "Classics"],
        createdAt: "Sunday, September 5, 2021 6:50 PM"
    } 
]

const HomePage: React.FunctionComponent = (): ReactElement => {
    return (
        <BodyContainer>
            <WelcomeBanner>
                <Title>Welcome to Poppyland Blog</Title>
                <Navigation showText={true} />
            </WelcomeBanner>
            <LatestArticlesContainer>
                <SectionTitle>Latest Articles:</SectionTitle>
                {articles.sort((a: Article, b: Article) => new Date(b.createdAt) as any - (new Date(a.createdAt) as any))
                    .map((article) => (
                        <ArticleLink to={`articles/${article.slug}`} key={article.slug}>
                            <ArticleContainer>
                                <ArticleImage src={`https://blog-images.poppyland.dev/${article.img}`} />
                                <ArticleDetailContainer>
                                    <ArticleTitle>{article.title}</ArticleTitle>
                                    <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
                                    <ArticleSubtitle>{article.createdAt}</ArticleSubtitle>
                                    <Categories category={article.category} subcategories={article.subcategory} />
                                </ArticleDetailContainer>
                            </ArticleContainer>
                        </ArticleLink>
                    ))
                }
            </LatestArticlesContainer>
        </BodyContainer>
    )
}

export default HomePage