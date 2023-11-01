import React, { useEffect, useState } from "react";
import { getTopNActiveCreators } from "../../data/topCreatorsService";
import TopCreator from "../../types/TopCreator";
import { Card, CardContent, CardHeader } from "@mui/material";
import CreatorList from "../CreatorList/CreatorList";

interface TopCreatorsProps {
  maxTopCreators?: number;
}

const TopCreators: React.FC<TopCreatorsProps> = ({ maxTopCreators = 3 }) => {
  const [topCreators, setTopCreators] = useState<TopCreator[] | null>(null);

  useEffect(() => {
    const fetchTopCreators = async () => {
      try {
        const creators = await getTopNActiveCreators(3);
        setTopCreators(creators);
      } catch (error) {
        console.error("Error fetching top creators:", error);
      }
    };

    fetchTopCreators();
  }, []);

  return (
    <Card>
      <CardHeader title={`Top ${maxTopCreators} Active Creators`} />
      <CardContent>
        <CreatorList topCreators={topCreators} />
      </CardContent>
    </Card>
  );
};

export default TopCreators;
