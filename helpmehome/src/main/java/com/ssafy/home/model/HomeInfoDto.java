package com.ssafy.home.model;

public class HomeInfoDto {

	private String sidoName;
	private String gugunName;
	private String dongName;
	private int year;
	private int month;
	
	public HomeInfoDto(){}

	public HomeInfoDto(String sidoName, String gugunName, String dongName, int year, int month) {
		super();
		this.sidoName = sidoName;
		this.gugunName = gugunName;
		this.dongName = dongName;
		this.year = year;
		this.month = month;
	}

	public String getSidoName() {
		return sidoName;
	}

	public void setSidoName(String sidoName) {
		this.sidoName = sidoName;
	}

	public String getGugunName() {
		return gugunName;
	}

	public void setGugunName(String gugunName) {
		this.gugunName = gugunName;
	}

	public String getDongName() {
		return dongName;
	}

	public void setDongName(String dongName) {
		this.dongName = dongName;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	@Override
	public String toString() {
		return "HomeInfoDto [sidoName=" + sidoName + ", gugunName=" + gugunName + ", dongName=" + dongName + ", year="
				+ year + ", month=" + month + "]";
	}

	
}
