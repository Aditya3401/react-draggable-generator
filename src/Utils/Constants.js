import { v4 as uuidv4 } from "uuid";

export const customScrollbar = {
  overflowY: "scroll",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.3em",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#18181B",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#3F3F46",
    borderRadius: "4px",
  },
};

export const data = [
  {
    id: uuidv4(),
    type: "text",
    info: "Reading practice to help you understand simple information, words and sentences about known topics. Texts include posters, messages, forms and timetables.",
  },
  {
    id: uuidv4(),
    type: "text",
    info: "Reading practice to help you understand simple texts and find specific information in everyday material. Texts include emails, invitations, personal messages, tips, notices and signs.",
  },
  {
    id: uuidv4(),
    type: "text",
    info: "Reading practice to help you understand texts with everyday or job-related language. Texts include articles, travel guides, emails, adverts and reviews.",
  },
];

export const imageData = [
  {
    id: uuidv4(),
    type: "image",
    url: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
  },
  {
    id: uuidv4(),
    type: "image",
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: uuidv4(),
    type: "image",
    url: "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
  },
];
