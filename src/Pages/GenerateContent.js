import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Grid } from "@mui/material";
import MenuSection from "../Components/MenuSection";
import OutputSection from "../Components/OutputSection";
import SelectedSection from "../Components/SelectedSection";
import { DragDropContext } from "react-beautiful-dnd";
import { customScrollbar } from "../Utils/Constants";

const GenerateContent = () => {
  const [sourceData, setSourceData] = useState([]);
  const [selected, setSelected] = useState("");
  const [destinationData, setDestinationData] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === "paperSource") {
      if (source.droppableId === destination.droppableId) {
        return;
      }
      const updatedSourceData = Array.from(sourceData);
      const [draggedItem] = updatedSourceData.splice(result.source.index, 1);
      setSourceData(updatedSourceData);

      const updatedDestinationData = Array.from(destinationData);
      console.log(result.destination.index);
      updatedDestinationData.splice(result.destination.index, 0, draggedItem);
      setDestinationData(updatedDestinationData);
    } else {
      const updatedDestinationData = Array.from(destinationData);
      const [draggedItem] = updatedDestinationData.splice(
        result.source.index,
        1
      );
      updatedDestinationData.splice(result.destination.index, 0, draggedItem);
      setDestinationData(updatedDestinationData);
    }
  };

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid
          item
          md={3}
          sx={{
            height: "92vh",
            background: "#18181B",
            ...customScrollbar,
          }}
        >
          <MenuSection
            selected={selected}
            setSelected={setSelected}
            setSourceData={setSourceData}
          />
        </Grid>
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid item md={4.5} sx={{ ...customScrollbar, height: "92vh" }}>
            <OutputSection sourceData={sourceData} />
          </Grid>

          <Grid item md={4.5} sx={{ ...customScrollbar, height: "92vh" }}>
            <SelectedSection
              destinationData={destinationData}
              setDestinationData={setDestinationData}
            />
          </Grid>
        </DragDropContext>
      </Grid>
    </>
  );
};

export default GenerateContent;
