
import styles from "../../comment-section.module.css";
export default function CommentListItem({ comment, productId, currentUser}) {
    const { firstname, surname, createdAt, commentText, heading } = comment;
    const formattedDate = new Date(createdAt.seconds * 1000).toLocaleDateString();
  

    // const handleDelete = async () => {
    //     try {
    //       await deleteComment(productId, comment.id, currentUser.uid);
    //       // Optionally refresh comments list
    //     } catch (error) {
    //       console.error('Error deleting comment:', error);
    //     }
    //   };
      
    return (
        <div className={`p-6  ${styles.comment_item}`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div className="user flex flex-col space-y-2 md:mr-4">
              <span className="text-lg font-bold text-gray-800">{`${firstname} ${surname}`}</span>
            </div>
            <div className="content flex flex-col mb-2 md:mb-0">
              <span className="text-xl font-bold text-[#14433D]">NICE</span>
              <p className="text-gray-700">{commentText}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <button
                onClick
                className="text-red-500 hover:text-red-700 focus:outline-none transition ease-in-out delay-150"
              >
                &times;
              </button>
              <span className="text-sm text-gray-500">{formattedDate}</span>
            </div>
          </div>
        </div>
    )
  }
  