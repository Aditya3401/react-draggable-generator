import {
  Box,
  Button,
  IconButton,
  Pagination,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../Css/SelectedSection.css";
import SaveIcon from "@mui/icons-material/Save";

const SelectedSection = ({ destinationData, setDestinationData, pages }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleEditItem = (id) => {
    setIsDisabled((prev) => {
      const updatedState = { ...prev };
      updatedState[id] = !prev[id];
      return updatedState;
    });
    console.log(isDisabled[id] ? "changes done" : "now edit");
    console.log(destinationData);
  };

  const handleEdittedText = (id, value) => {
    setDestinationData((prevData) => {
      const updatedData = prevData.map((droppable) => {
        if (droppable.page === currentPage) {
          const updatedItems = droppable.items.map((item) => {
            if (item.id === id) {
              return { ...item, info: value };
            }
            return item;
          });
          return { ...droppable, items: updatedItems };
        }
        return droppable;
      });
      return updatedData;
    });
  };

  const onDrop = (result) => {
    console.log(result);
  };

  const handleRemoveItem = (id) => {
    setDestinationData((prevData) => {
      const updatedData = [...prevData];
      const currentPageIndex = updatedData.findIndex(
        (droppable) => droppable.page === currentPage
      );
      if (currentPageIndex !== -1) {
        const updatedItems = updatedData[currentPageIndex].items.filter(
          (item) => item.id !== id
        );
        updatedData[currentPageIndex].items = updatedItems;
      }
      return updatedData;
    });
  };

  const currentSelectedPage = destinationData.find(
    (obj) => obj.page === currentPage
  );

  return (
    <>
      <Box sx={{ padding: "10px", ml: 2, mr: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            Final Content
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              background: "rgb(253, 169, 45)",
              boxShadow: "rgba(253, 169, 45, 0.24) 0px 8px 16px 0px",
              fontWeight: "400",
              fontFamily: "Inter",
              fontSize: "0.875rem",
              padding: "4px 12px",
              borderRadius: "8px",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "rgb(182, 104, 22)",
              },
            }}
          >
            Generate Slides
          </Button>
        </Box>

        {currentSelectedPage && (
          <Droppable droppableId={currentSelectedPage.id} onDrop={onDrop}>
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  minHeight: "75vh",
                  mt: 2,
                }}
              >
                {currentSelectedPage.items.map((item, index) => (
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
                          mb: 2,
                          paddingTop: 4,
                        }}
                      >
                        {item.type === "text" ? (
                          <TextField
                            variant="standard"
                            disabled={!isDisabled[item.id]}
                            onChange={(event) =>
                              handleEdittedText(item.id, event.target.value)
                            }
                            multiline
                            InputProps={{
                              disableUnderline: true,
                            }}
                            value={item.info}
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

        <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
          {/* <Typography>Page: {page}</Typography> */}
          <Pagination
            count={pages}
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </>
  );
};

export default SelectedSection;
