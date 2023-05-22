package com.ssafy.home.model.service;

import java.util.List;

import com.ssafy.home.model.Comment;

public interface CommentService {

	List<Comment> list(String article);

	boolean create(Comment comment);

	boolean modify(Comment comment);

	boolean delete(int commentNo);

}
