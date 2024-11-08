import { Paper } from "@mui/material";
import { ReactElement, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Browse from "../components/Browse";
import {
  BodyContainer,
  BrowseContainer,
  SectionTitle,
} from "../components/StyledComponents";

const CategoryBrowse: React.FunctionComponent = (): ReactElement => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : null;
  const subcategoryRaw = searchParams.get("subcategory");
  const subcategory =
    subcategoryRaw &&
    subcategoryRaw.split("")[0].toUpperCase() +
      subcategoryRaw.split("").splice(1).join("");

  const intro = useMemo(() => {
    switch (category) {
      case "Gardening":
        return (
          <>
            <p>
              Welcome to the gardening section of my blog! Here, I plant flowers
              to create a more vibrant space, grow fruits and vegetables using
              companion planting techniques, and slowly improve the
              sustainability of my garden.
            </p>
            <p>Some things I have in the works are:</p>
            <ul>
              <li>Introduction to companion planting.</li>
              <li>
                Spring and summer companion planted garden in USDA zone 8a.
              </li>
              <li>Installing drip irrigation to my raised beds.</li>
              <li>Introduction to container gardening.</li>
            </ul>
          </>
        );
      case "Crafts":
        return (
          <>
            <p>
              Welcome to the crafts section of my blog! Here, I do a bunch of
              random things, from cross stitch to woodworking. I really like
              making home accents, especially wall art.
            </p>
            <p>
              I also enjoy building things outside for my garden. Although I
              haven't posted much about it yet, there are a few things in the
              works:
            </p>
            <ul>
              <li>Garden arbor and fence.</li>
              <li>Getting started with needlepoint.</li>
            </ul>
          </>
        );
      case "Coding":
        return (
          <>
            <p>
              Welcome to the coding section of my blog! Here, I mostly post
              about the updates I make to the site, and go into the technical
              details of my implementations. I also have some fun outside of
              this project with random things like making a video game about my
              cats and controlling a valve with a Raspberry Pi.
            </p>
          </>
        );
      case "Books":
        return (
          <>
            <p>
              Welcome to the books section of my blog! Here, I post my thoughts
              about the books I read. This section isn't super active, but it's
              here just in case.
            </p>
          </>
        );
      case "Antiquing":
        return (
          <>
            <p>
              Welcome to the antiquing section of my blog! Here, I collect my
              favorite things and show how I decorate my home. There's not much
              content yet here, but be prepared for some new articles soon!
            </p>
            <ul>
              <li>How to start a collection.</li>
              <li>How to display your collections.</li>
            </ul>
          </>
        );
      default:
        return ``;
    }
  }, [category]);

  const background = useMemo(() => {
    switch (category) {
      case "Gardening":
        return (
          <p>
            I got into gardening seriously when I was living in Boston in an
            apartment with a large, southern facing balcony. I got a ton of
            fabric containers and planted as much as I could, from broccoli and
            beets to tomatoes and peppers. I learned all about companion
            planting, and attempted it in my own small container garden. Now,
            I've got a few raised beds.
          </p>
        );
      case "Crafts":
        return (
          <p>
            I grew up always doing crafts with my mom. Third through fifth grade
            I was in the knitting club, and eventually I picked it back up my
            senior year of high school. From there, I realized knitting could
            actually be interesting. I started making purses, and eventually
            moved on to afghans and sweaters. I learned how to crochet to
            enhance my knitting. During Covid quarantine in 2020 I learned how
            to embroider, and eventually discovered I loved the vintage look of
            cross stitch. I picked up woodworking with the help of my dad to
            build for the garden, as well as for framing my needlework.
          </p>
        );
      case "Coding":
        return (
          <p>
            My first experience with web development was on Neopets.com, an
            online kids' virtual pet website that I played growing up. You could
            customize your home page with basic HTML and CSS, and I had a ton of
            fun doing that, and eventually in 2019, I decided to get serious
            about web development, and have been working at it consistently
            since then. I landed my first job as a full stack software engineer
            in 2021, using the prototype of this website as part of my
            portfolio.
          </p>
        );
      default:
        return ``;
    }
  }, [category]);

  return (
    <BodyContainer>
      {category && (
        <BrowseContainer sx={{ marginBottom: "20px" }}>
          <SectionTitle>{category}</SectionTitle>
          <Paper
            sx={{ marginTop: "-20px", padding: "20px", lineHeight: "1.75" }}
          >
            <p>
              {/*
              What's the focus?
              Why do I like to garden?
              What's my goal?
              What makes me unique in this?
            */}
              {intro}
            </p>
            {/*
            Subcategories
          */}
          </Paper>
        </BrowseContainer>
      )}
      <BrowseContainer>
        <SectionTitle>{category || subcategory} Articles:</SectionTitle>

        <Browse />
      </BrowseContainer>
      {category && background && (
        <BrowseContainer sx={{ marginTop: "20px" }}>
          <SectionTitle>My {category} Background</SectionTitle>
          <Paper
            sx={{ marginTop: "-20px", padding: "20px", lineHeight: "1.75" }}
          >
            <p>{background}</p>
          </Paper>
        </BrowseContainer>
      )}
    </BodyContainer>
  );
};

export default CategoryBrowse;
