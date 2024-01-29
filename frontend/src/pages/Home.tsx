import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

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

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    text-transform: capitalize;
    flex-wrap: wrap;
`

const Category = styled.div`
    color: white;
    background-color: grey;
    border-radius: 15px;
    padding: 5px 10px;
`

const Subcategory = styled(Category)`
    color: black;
    background-color: lightgrey;
`

const ArticleLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const ArticleImage = styled.img`
    width: 10rem;
`

interface Article {
    id: number
    title: string
    subtitle: string
    img: string
    category: string
    subcategory: string[]
    created: string
}

const HomePage: React.FunctionComponent = (): ReactElement => {
    const articles: Article[] = [
        {
            id: 13,
            title: "Fried Porkchops",
            subtitle: "A delicious breakfast or great with curry or gravy.",
            img: "fried_porkchops_2.png",
            category: "Food",
            subcategory: ["Pork", "Breakfast", "Dinner", 'Recipe'],
            created: "Tuesday, May 2, 2023 4:50 PM"
        },
        {
            id: 3,
            title: "Sourdough Bread",
            subtitle: "This should be called wonder bread!",
            img: "test/sourdough.jpg",
            category: "Food",
            subcategory: ["Baking", "Bread", "Easier than it looks"],
            created: "Sunday, April 4, 2021 9:25 PM"
        },
        {
            id: 18,
            title: "Smother Me In Lemon Curd",
            subtitle: "Recipes of things to make that pair well with lemon curd.",
            img: "lemon_curd.png",
            category: "Food",
            subcategory: ["Baking", "Lists"],
            created: "Sunday, November 26, 2023 8:15 PM"
        },
        {
            id: 10,
            title: "Summer 2023 Garden",
            subtitle: "",
            img: "garden_boxes.png",
            category: "Gardening",
            subcategory: ["Raised Beds", "Companion Planting"],
            created: "Monday, May 1, 2023 1:30 PM"
        },
        {
            id: 11,
            title: "Building a Pig Pen",
            subtitle: "A shelter for my future piggies",
            img: "pig_shelter_4.png",
            category: "Gardening",
            subcategory: ["Pigs", "Livestock", "Woodworking"],
            created: "Tuesday, May 2, 2023 3:40 PM"
        },
        {
            id: 20,
            title: "2024 Spring/Summer Garden Plan",
            subtitle: "Yet again, going overboard",
            img: "garden_2024.png",
            category: "Gardening",
            subcategory: ["Raised Beds", "Companion Planting", "Woodworking"],    
            created: "Saturday, January 27, 2024 8:10 PM"
        },
        {
            id: 4,
            title: "Knit UT Hotpad",
            subtitle: "Go Vols!",
            img: "test/yarn-over-increase1.jpg",
            category: "Crafts",
            subcategory: ["Knitting"],
            created: "Sunday, April 4, 2021 9:25 PM"
        },
        {
            id: 19,
            title: "Making Curtains & Valences",
            subtitle: "Getting to Know My Sewing Machine",
            img: "curtain_2.png",
            category: "Crafts",
            subcategory: ["Sewing", "DIY"],
            created: "Saturday, January 27, 2024 7:13 PM"
        },
        {
            id: 21,
            title: "I Built An Arbor!",
            subtitle: "",
            img: "arbor_2.png",
            category: "Crafts",
            subcategory: ["Woodworking", "Easy Projects", "Backyard Projects"],
            created: "Saturday, January 27, 2024 7:41 PM"
        },
        {
            id: 22,
            title: "Home is Where the Cake Is",
            subtitle: "A surprise for my boyfriend who's moving in with me",
            img: "cake_home_3.png",
            category: "Crafts",
            subcategory: ["Cross Stitch"],
            created: "Saturday, January 27, 2024 7:50 PM"
        },
        {
            id: 23,
            title: "A Squirrel Sampler",
            subtitle: "A present for my mom",
            img: "squirrel_sampler_2.png",
            category: "Crafts",
            subcategory: ["Cross Stitch"],
            created: "Saturday, January 27, 2024 7:55 PM"
        },
        {
            id: 24,
            title: "Fresh Baked Pies!",
            subtitle: "A present for my aunt!",
            img: "pies_2.png",
            category: "Crafts",
            subcategory: ["Cross Stitch"],
            created: "Saturday, January 27, 2024 7:56 PM"
        },
        {
            id: 25,
            title: "Making a Workbench",
            subtitle: "So I can finally not work on the floor",
            img: "workbench_2.png",
            category: "Crafts",
            subcategory: ["Woodworking", "Easy Projects"],
            created: "Sunday, January 28, 2024 2:24 PM"
        },
        {
            id: 12,
            title: "Connecting a Django Backend to a React Frontend via Cloudfront and Terraform",
            subtitle: "",
            img: "tcahdotcom.png",
            category: "Coding",
            subcategory: ["React.js", "Django", "Web Development"],
            created: "Tuesday, May 2, 2023 9:25 AM"
        },
        {
            id: 14,
            title: "A Local Band's Website",
            subtitle: "NoseyNeighborBand.com",
            img: "noseyneighbor.png",
            category: "Coding",
            subcategory: ["React.js", "Web Development"],
            created: "Friday, May 5, 2023 4:38 PM"
        },
        {
            id: 15,
            title: "A Journaling/Diary Website",
            subtitle: "https://journal.poppyland.dev",
            img: "poppylandjournal.png",
            category: "Coding",
            subcategory: ["React.js", "Web Development", "AWS", "Serverless"],
            created: "Thursday, November 16, 2023 11:19 AM"
        },
        {
            id: 16,
            title: "Drip Irrigation via Raspberry Pi",
            subtitle: "Lazily watering my plants",
            img: "poppylandraincloud.png",
            category: "Coding",
            subcategory: ["Raspberry Pi", "Gardening", "Drip Irrigation"],
            created: "Thursday, November 16, 2023 11:20 AM"
        },
        {
            id: 6,
            title: "Later by Stephen King",
            subtitle: "More like, now",
            img: "test/later.jpg",
            category: "Books",
            subcategory: ["Book Review", "Fiction", "Thriller"],
            created: "Sunday, April 4, 2021 9:25 PM"
        },
        {
            id: 8,
            title: "Jurassic Park: A Review",
            subtitle: "I've got dinosaurs on the brain",
            img: "jurassic_park.png",
            category: "Books",
            subcategory: ["Book Review", "Fiction", "Science Fiction"],
            created: "Sunday, July 18, 2021 11:25 AM"
        },
        {
            id: 9,
            title: "Thoughts on Anne of Green Gables",
            subtitle: "...",
            img: "anne.png",
            category: "Books",
            subcategory: ["Book Review", "Fiction", "Classics"],
            created: "Sunday, September 5, 2021 6:50 PM"
        },
        {
            id: 7,
            title: "I've obtained the cake",
            subtitle: "Reaching level 60 on WaniKani",
            img: "test/durtle-cake.jpg",
            category: "Languages",
            subcategory: ["Japanese", "WaniKani", "Kanji"],
            created: "Sunday, April 4, 2021 9:25 PM"
        }
          
    ]

    return (
        <div>
            <WelcomeBanner>
                <Title>Welcome to Poppyland Blog</Title>
                <Navigation showText={true} />
            </WelcomeBanner>
            <LatestArticlesContainer>
                <SectionTitle>Latest Articles:</SectionTitle>
                {articles.sort((a: Article, b: Article) => new Date(b.created) as any - (new Date(a.created) as any))
                    .map((article) => (
                        <ArticleLink to={`articles/${article.id}`} key={article.id}>
                            <ArticleContainer>
                                <ArticleImage src={`https://blog-images.poppyland.dev/${article.img}`} />
                                <ArticleDetailContainer>
                                    <ArticleTitle>{article.title}</ArticleTitle>
                                    <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
                                    <ArticleSubtitle>{article.created}</ArticleSubtitle>
                                    <CategoryContainer>
                                        <Category>{article.category}</Category>
                                        {article.subcategory.map((subcategory) => <Subcategory>{subcategory}</Subcategory>)}
                                    </CategoryContainer>
                                </ArticleDetailContainer>
                            </ArticleContainer>
                        </ArticleLink>
                    ))
                }
            </LatestArticlesContainer>
        </div>
    )
}

export default HomePage