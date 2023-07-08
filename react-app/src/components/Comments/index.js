import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeComment, profileComments } from "../../store/comments";
import { getAllUsers } from "../../store/session";
import CommentFormModal from "../EditComments/EditCommentsModal";
import "./Comments.css";

const Comments = ({ profile, user, setProfileRating }) => {
    const dispatch = useDispatch();
    const commentsObj = useSelector((state) => state.comments);
    const users = useSelector((state) => state.session.users);

    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(5);

    useEffect(() => {
        if (profile) {
            dispatch(profileComments(profile?.id));
        }
    }, [dispatch, profile?.id, profile]);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    let comments;
    if (commentsObj) {
        comments = Object.values(commentsObj);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const newComment = {
            comment,
            rating: +rating,
            profileId: +profile?.id,
            userId: +user?.id,
        };
        await dispatch(makeComment(newComment)).then(() =>
            setProfileRating(profile.rating),
        );
        setComment("");
    };

    return (
        <>
            <div className="comments-container">
                {comments?.length === 0 && (
                    <p className="no-comments">
                        No activity yet... Be the first to comment!
                    </p>
                )}
                {comments?.length > 0 &&
                    comments.map((comment) => (
                        <div key={comment.id} className="single-comment">
                            <p className="user-name">
                                {users[comment.userId]?.firstName}{" "}
                                {users[comment.userId]?.lastName}
                            </p>
                            <p className="ratings">
                                {comment.rating === 5
                                    ? "★★★★★"
                                    : comment.rating === 4
                                    ? "★★★★"
                                    : comment.rating === 3
                                    ? "★★★"
                                    : comment.rating === 2
                                    ? "★★"
                                    : "★"}
                            </p>
                            <p className="comment">{comment.comment}</p>
                            <div>
                                {user?.id === comment?.userId && (
                                    <CommentFormModal
                                        user={user}
                                        profile={profile}
                                        id={comment?.id}
                                        editComment={comment?.comment}
                                        editRating={comment?.rating}
                                        setProfileRating={setProfileRating}
                                    />
                                )}
                            </div>
                            <div className="border-bottom"></div>
                        </div>
                    ))}
            </div>
            {user && (
                <form onSubmit={onSubmit} className="comment-form">
                    <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Leave a comment..."
                        required
                    />
                    <label>Rating: </label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="ratings"
                    >
                        <option value="1">★</option>
                        <option value="2">★★</option>
                        <option value="3">★★★</option>
                        <option value="4">★★★★</option>
                        <option value="5">★★★★★</option>
                    </select>
                    <button>Submit</button>
                </form>
            )}
        </>
    );
};

export default Comments;
