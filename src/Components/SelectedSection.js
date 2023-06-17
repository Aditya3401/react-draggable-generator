import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../Css/SelectedSection.css";
import SaveIcon from "@mui/icons-material/Save";

const SelectedSection = ({ destinationData, setDestinationData }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleEditItem = (id) => {
    setIsDisabled((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const onDrop = (result) => {
    console.log(result);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = destinationData.filter((item) => item.id !== id);
    setDestinationData(updatedItems);
  };

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
            Selected
          </Typography>
        </Box>

        {destinationData && (
          <Droppable droppableId="paperDestination" onDrop={onDrop}>
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  minHeight: "80vh",
                }}
              >
                {destinationData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Paper
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          position: "relative",
                          background: "#3F3F46",
                          color: "#fff",
                          padding: "15px",
                          mt: 2,
                          paddingTop: 4,
                        }}
                      >
                        {item.type === "text" ? (
                          <TextField
                            variant="standard"
                            disabled={!isDisabled[item.id]}
                            multiline
                            InputProps={{
                              disableUnderline: true,
                            }}
                            defaultValue={item.info}
                            sx={{ width: "100%", "& input": { color: "#fff" } }}
                          />
                        ) : (
                          <img
                            src={item.url}
                            alt="generatedImages"
                            style={{ height: "auto", width: "100%" }}
                          />
                        )}
                        <IconButton
                          onClick={() => handleRemoveItem(item.id)}
                          sx={{
                            position: "absolute",
                            right: 3,
                            top: 3,
                          }}
                        >
                          <DeleteIcon sx={{ color: "red", fontSize: "16px" }} />
                        </IconButton>
                        {item.type === "text" ? (
                          <IconButton
                            onClick={() => handleEditItem(item.id)}
                            sx={{
                              position: "absolute",
                              right: 25,
                              top: 3,
                            }}
                          >
                            {!isDisabled[item.id] ? (
                              <EditIcon
                                sx={{ color: "#1974D2", fontSize: "16px" }}
                              />
                            ) : (
                              <SaveIcon
                                sx={{ color: "#4CAF50", fontSize: "16px" }}
                              />
                            )}
                          </IconButton>
                        ) : null}
                      </Paper>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        )}
      </Box>
    </>
  );
};

export default SelectedSection;
