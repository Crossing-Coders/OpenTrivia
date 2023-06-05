import prisma from "./prisma";

//Get Specific Trivia Venue 
  //For Individual Pages
//Get Filtered Trivia Results
  //For use in the cards
  



const getPerpsFiltered = async (myname) => {
    const myPerps = await prisma.perpPublic.findMany({
        where:{
            FULLNAME: {
                contains: myname,
                mode: 'insensitive'
            }
        },
        orderBy: [
          {VIEWCOUNT: 'desc'}
        ],
        take: 15
    })

    return myPerps

};
//test

const getSpecificPerp = async (mywebid) => {
  const myPerp = await prisma.perp.findUnique({
    where:{
        WEBID: mywebid
    }
  })

    //Will have to move the logic of updateViewCount
//     const myUpdate = await prisma.Perp.updateUnique({
//     where:{
//         WEBID: mywebid
//     }
//   })
  return myPerp;
}


const getRandomPerp = async () => {
          const productsCount = await prisma.perp.count();
          const skip = Math.floor(Math.random() * productsCount);
          return await prisma.perp.findMany({
            take: 1,
            skip: skip,
          });
};



// const votePerp = async (mywebid, myvote) => {
//   const { data, error, status } = await supabase.rpc("add_status_vote", {
//     myvote,
//     mywebid
//   });
//   if (error) return "Error - Vote failed";
//   return data;
// };


const getTopPerps = async () => {
      const myPerps = await prisma.perpPublic.findMany({
        orderBy:[
          {
            VIEWCOUNT: 'desc'
          }
        ],
        take: 10
          
      })
      return myPerps

}

export default { getSpecificPerp, getPerpsFiltered, getTopPerps, getRandomPerp};

