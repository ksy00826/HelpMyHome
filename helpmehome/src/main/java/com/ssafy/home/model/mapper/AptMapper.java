package com.ssafy.home.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.home.model.DongCodeDto;
import com.ssafy.home.model.HomeInfoDto;
import com.ssafy.home.model.HomeResultDto;
import com.ssafy.home.model.InterestAreaDto;

@Mapper
public interface AptMapper {
	//집 정보
	List<DongCodeDto> selectDongCode() throws SQLException;

	List<HomeResultDto> getHomeList(HomeInfoDto homeInfoDto) throws SQLException;

	int removeApt(HomeResultDto removeApt) throws SQLException;

	
//	List<HomeResultDto> selectAll() throws SQLException;

	//관심 지역 정보
	int registInterest(InterestAreaDto newArea) throws SQLException;

	List<InterestAreaDto> getInterestList(String userId) throws SQLException;

//	List<HomeResultDto> getInterList(String selectedDongCode, int year, int month) throws SQLException;

}
