import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from '../../utility/addToDb'
const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    const { bookId: currentBookId, image } = book
    const handleMarkAsRead = (id) => {
        addToStoredReadList(id)
    }
    return (
        <div>
            <h1>Book id :{bookId}</h1>
            <img className="w-36" src={image} alt="" />
            <br />
            <button className="btn btn-outline mr-4 btn-accent" onClick={() => handleMarkAsRead(bookId)}>Mark as Read</button>
            <button className="btn btn-accent">Add to WishList</button>
        </div>
    );
}

export default BookDetails;