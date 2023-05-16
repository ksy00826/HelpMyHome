package com.ssafy.home.model;

public class HomeResultDto {

	private String apartmentName;
	private String floor;
	private String area;
	private String dongName;
	private String dealAmount;
	private String roadName;
	
	public HomeResultDto() {}

	public HomeResultDto(String apartmentName, String floor, String area, String dongName, String dealAmount,
			String roadName) {
		super();
		this.apartmentName = apartmentName;
		this.floor = floor;
		this.area = area;
		this.dongName = dongName;
		this.dealAmount = dealAmount;
		this.roadName = roadName;
	}

	public String getApartmentName() {
		return apartmentName;
	}

	public void setApartmentName(String apartmentName) {
		this.apartmentName = apartmentName;
	}

	public String getFloor() {
		return floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getDongName() {
		return dongName;
	}

	public void setDongName(String dongName) {
		this.dongName = dongName;
	}

	public String getDealAmount() {
		return dealAmount;
	}

	public void setDealAmount(String dealAmount) {
		this.dealAmount = dealAmount;
	}

	public String getRoadName() {
		return roadName;
	}

	public void setRoadName(String roadName) {
		this.roadName = roadName;
	}

	@Override
	public String toString() {
		return "HomeResultDto [apartmentName=" + apartmentName + ", floor=" + floor + ", area=" + area + ", dongName="
				+ dongName + ", dealAmount=" + dealAmount + ", roadName=" + roadName + "]";
	}

	
}
