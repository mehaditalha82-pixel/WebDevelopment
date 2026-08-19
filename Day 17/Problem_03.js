function countHashtags(caption) {
    // Write your code here...
    if(typeof caption === `string`){
         let longest = "";
        let hashtags = caption.split(` `).filter((elem)=>{
        if(elem.length > longest.length && elem.startsWith('#')){
            longest = elem;
        }
        return elem.startsWith("#");
    })
   
    return {"hashtagCount":hashtags.length||0,"longestTag":longest.slice(1)||""};
    }
   return "Invalid";
}
