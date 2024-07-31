import { useEffect, useState } from "react";
import { useForm } from "./useForm";
import {addComment } from "../services/commentService";



const useCommentForm = (initialValues, productId, currentUser, userProfile, onClose) => {
  const sumbitComment = async (values) => {
    try {
      await addComment(
        productId,
        currentUser.uid,
        userProfile.firstName,
        userProfile.surname,
        values.comment
      );

      onClose();
    } catch (error) {
      console.error('Error posting comment: ', error);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, sumbitComment);

  return {
    values,
    changeHandler,
    submitHandler,
  };
};


export default useCommentForm;
