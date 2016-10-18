const drawSpaces = function(n)
{
  let space = "";
  for (let i=0; i<n; i=i+1)
    space=space+" ";
  return space;
}

const drawStars = function(n) 
{
  let star = "";
  for (let i=0; i<n; i=i+1)
    star=star+"*";
  return star;
}

const diamond = function(n)
{
  if (n%2===0)
    n=n+1;
  let spaceNumber = Math.floor(n/2);
  let starNumber = 1;
  for (let i=0; i<n; i=i+1)
  {
    console.log(drawSpaces(spaceNumber)+drawStars(starNumber)+'\n');
    if (i < Math.floor(n/2))
    {
      spaceNumber=spaceNumber-1;
      starNumber=starNumber+2;
    }
    else
    {
      spaceNumber=spaceNumber+1;
      starNumber=starNumber-2;
    }
  }
}
diamond(10);