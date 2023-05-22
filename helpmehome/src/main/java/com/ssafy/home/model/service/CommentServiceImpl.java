package com.ssafy.home.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.home.model.Comment;
import com.ssafy.home.model.mapper.CommentMapper;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentMapper commentMapper;

	@Override
	public List<Comment> list(String articleno) {
		return commentMapper.list(articleno);
	}

	@Override
	public boolean create(Comment comment) {
		return commentMapper.create(comment) == 1;
	}

	@Override
	public boolean modify(Comment comment) {
		return commentMapper.modify(comment) == 1;
	}

	@Override
	public boolean delete(int commentNo) {
		return commentMapper.delete(commentNo) == 1;
	}

}
