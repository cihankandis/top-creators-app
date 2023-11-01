import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import TopCreator from "../../types/TopCreator";

interface CreatorListProps {
  topCreators: TopCreator[] | null;
}

const CreatorList: React.FC<CreatorListProps> = ({ topCreators }) => {
  if (!topCreators || topCreators.length === 0) {
    return <div>No creators available.</div>;
  }

  return (
    <List>
      {topCreators?.map((creator, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                <strong>Creator: {creator.user.email}</strong>
              </span>
              <span>Product count: {creator.productCount}</span>
              <span>
                Latest update: {creator.mostRecentProduct?.createTime}
              </span>
            </div>
          </ListItem>
          {index !== topCreators.length - 1 && <Divider component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default CreatorList;
