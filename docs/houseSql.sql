use aptcrawl;

DROP TABLE IF EXISTS `aptcrawl`.`interestarea` ;
CREATE TABLE `aptcrawl`.`interestarea` (
    idx int auto_increment,    
    userId VARCHAR(20) NOT NULL,
    dongCode VARCHAR(20) NOT NULL,
    area    VARCHAR(100),
    primary key (idx, userId)
);

DROP TABLE IF EXISTS `aptcrawl`.`user` ;
CREATE TABLE `aptcrawl`.`user` (
  `id` VARCHAR(16) NOT NULL,
  `pw` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `addr` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `aptcrawl`.`board` ;

CREATE TABLE IF NOT EXISTS `aptcrawl`.`board` (
  `articleno` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(16) NULL DEFAULT NULL,
  `subject` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(2000) NULL DEFAULT NULL,
  `hit` INT NULL DEFAULT 0,
  `regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`articleno`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `aptcrawl`.`board` ;

CREATE TABLE IF NOT EXISTS `aptcrawl`.`board` (
  `articleno` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(16) NULL DEFAULT NULL,
  `subject` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(2000) NULL DEFAULT NULL,
  `hit` INT NULL DEFAULT 0,
  `regtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`articleno`),
  INDEX `board_to_member_fk` (`userid` ASC) VISIBLE,
  CONSTRAINT `board_to_member_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `aptcrawl`.`user` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `ssafyvue`.`memo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aptcrawl`.`memo` ;

CREATE TABLE IF NOT EXISTS `aptcrawl`.`memo` (
  `memono` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(16) NULL DEFAULT NULL,
  `comment` VARCHAR(500) NULL DEFAULT NULL,
  `memotime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `articleno` INT NULL DEFAULT NULL,
  PRIMARY KEY (`memono`),
  INDEX `memo_to_board_fk` (`articleno` ASC) VISIBLE,
  INDEX `memo_to_member_fk_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `memo_to_board_fk`
    FOREIGN KEY (`articleno`)
    REFERENCES `ssafyvue`.`board` (`articleno`),
  CONSTRAINT `memo_to_member_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `ssafyvue`.`ssafy_member` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


commit;


select *
from user;

select *
from houseinfo
where buildYear = 2012;

select substr(dongcode, 1, 2)
from houseinfo;

# 동코드 두 자리수 별 시도 이름
drop table sidoNameCode;
create table sidoNameCode
select substr(dongcode, 1, 2) code, any_value(sidoName) sidoName
from dongcode
group by substr(dongcode, 1, 2);

# 동코드 두 자리수 별 거래 정보
drop table sidoCodeDealInfo;
create table sidoCodeDealInfo
select hd.dealYear dealYear, substr(hi.dongcode, 1, 2) `code`, count(*) dealCnt
from housedeal hd
join houseinfo hi on hi.aptCode = hd.aptCode
group by hd.dealYear, substr(hi.dongcode, 1, 2);

##합친거!!!
create table sidoDealInfo 
select scd.dealYear, sc.sidoName, scd.dealCnt
from sidoCodeDealInfo scd
join sidoNameCode sc on sc.code = scd.code;