import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const OutputSection = ({ sourceData }) => {
  return (
    <>
      <Box sx={{ padding: "10px", ml: 2, mr: 2 }}>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            Output
          </Typography>
        </Box>

        {sourceData && (
          <Droppable droppableId="paperSource">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {sourceData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          background: "#3F3F46",
                          color: "#fff",
                          padding: "15px",
                          mt: 2,
                        }}
                      >
                        {item.type === "text" ? (
                          <Typography>{item.info}</Typography>
                        ) : (
                          <img
                            src={item.url}
                            alt="generatedImages"
                            style={{ height: "auto", width: "100%" }}
                          />
                        )}
                      </Paper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </Box>
    </>
  );
};

export default OutputSection;
