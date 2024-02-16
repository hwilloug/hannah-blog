import { useMediaQuery, useTheme } from "@mui/material";
import { ReactElement } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Browse from "../components/Browse";
import {
  BodyContainer,
  BrowseContainer,
  SectionTitle,
} from "../components/StyledComponents";

const CategoryBrowse: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
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

  return (
    <BodyContainer>
      <BrowseContainer>
        <SectionTitle>{category || subcategory} Articles:</SectionTitle>
        <Browse />
      </BrowseContainer>
    </BodyContainer>
  );
};

export default CategoryBrowse;
