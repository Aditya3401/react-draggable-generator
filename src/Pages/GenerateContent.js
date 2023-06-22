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
  const [destinationData, setDestinationData] = useState([
    {
      id: `droppable${1}`,
      page: 1,
      items: [],
    },
  ]);
  const [pages, setPages] = useState(1);
  const [open, setOpen] = useState(true);

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
      const targetDroppableId = destination.droppableId;
      const targetItems = updatedDestinationData.find(
        (droppable) => droppable.id === targetDroppableId
      ).items;
      targetItems.splice(destination.index, 0, draggedItem);
      setDestinationData(updatedDestinationData);
    } else {
      const updatedDestinationData = Array.from(destinationData);
      const sourceDroppableId = source.droppableId;
      const destinationDroppableId = destination.droppableId;
      const [draggedItem] = updatedDestinationData
        .find((droppable) => droppable.id === sourceDroppableId)
        .items.splice(source.index, 1);
      updatedDestinationData
        .find((droppable) => droppable.id === destinationDroppableId)
        .items.splice(destination.index, 0, draggedItem);
      setDestinationData(updatedDestinationData);
    }
  };

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid
          item
          md={open ? 3 : 0.36}
          sx={{
            width: open ? "25%" : "3%",
            overflow: "hidden",
            height: "92vh",
            background: "#18181B",
            ...customScrollbar,
            opacity: open ? 1 : 0.5,
            transition: "opacity 0.4s ease, 0.4s ease",
          }}
        >
          <MenuSection
            selected={selected}
            setSelected={setSelected}
            setSourceData={setSourceData}
            open={open}
            setOpen={setOpen}
            pages={pages}
            setPages={setPages}
            setDestinationData={setDestinationData}
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
              pages={pages}
            />
          </Grid>
        </DragDropContext>
      </Grid>
    </>
  );
};

export default GenerateContent;
