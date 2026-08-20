type Role = "Admin" | "Editor" | "Viewer";

const canEdit=(role : Role) : boolean=>role === "Admin" || role === "Editor" ? true : false; 

console.log(canEdit("Viewer"));