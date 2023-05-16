package com.ssafy.home.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.home.model.DongCodeDto;
import com.ssafy.home.model.HomeInfoDto;
import com.ssafy.home.model.HomeResultDto;
import com.ssafy.home.model.InterestAreaDto;

public interface AptService {
	List<DongCodeDto> selectDongCode() throws SQLException;

	List<HomeResultDto> getHomeList(HomeInfoDto homeInfoDto) throws SQLException;

	List<HomeResultDto> getSearchList(List<HomeResultDto> original, String keyword) throws SQLException;

	int remove(HomeResultDto removeApt) throws SQLException;

//	List<HomeResultDto> selectAll() throws SQLException;

//	List<HomeResultDto> getInterList(String selectedDongCode, int year, int month) throws SQLException;

	int insertInterest(InterestAreaDto newArea) throws SQLException;

	List<InterestAreaDto> getInterestLs(String id)throws SQLException;

//	String getDongCode(String curSido, String curGugun, String curDong) throws SQLException;

}
