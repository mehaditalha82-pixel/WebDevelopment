let value : unknown;
let myvalue = value as string;
let herValue = value as number;

interface metadata{
    name : string;
    email ?: string; 
} 

const she:metadata = {
    name : "Heiko",
}as const;   //--> making it immutable

