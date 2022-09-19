import { getGifs } from "../helpers/getGifs";

//rafc
export const GifGrid = ( {category }) => {
  

  getGifs(category);

  return(
    <>
        <h3>{ category }</h3>
        <p>Hola mundo</p>
    </>
  )
}
