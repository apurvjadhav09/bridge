package com.java.group.excel;

import org.apache.poi.ss.usermodel.Cell;


import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.java.group.entity.Bridge;


import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class ExcelMethod {
	
	
    public static boolean checkExcelFormat(MultipartFile file) {

        String contentType = file.getContentType();

        if (contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            return true;
        } else {
            return false;
        }

    }



        public static List<Object> convertExcelToListOfProduct(InputStream is) {
            List<Object> list = new ArrayList<>();
            Set<String> bridgeNames = new HashSet<>();

            try {
                XSSFWorkbook workbook = new XSSFWorkbook(is);
                XSSFSheet sheet = workbook.getSheet("data");

              
                int headerRowNumber = 0;
                int dataStartRowNumber = 1;

                for (int rowIndex = dataStartRowNumber; rowIndex <= sheet.getLastRowNum(); rowIndex++) {
                    Row row = sheet.getRow(rowIndex);
                    if (row != null) {
                        Bridge p = new Bridge();
                        

                        for (int cid = 0; cid <= 21; cid++) {
                            Cell cell = row.getCell(cid);
                            String cellValueString = (cell != null) ? getCellValueAsString(cell) : null;


                        switch (cid) {
                            case 0:
                                p.setId(null);
                                break;
                            case 1:
                            	p.setCountry(cellValueString);
                                break;
                            case 2:
                            	p.setState(cellValueString);
                                break;
                            case 3:
                            	p.setDivision(cellValueString);
                                break;
                            case 4:
                            	
                                 p.setBridgeName(cellValueString);
                                 break;
                            case 5:
                                p.setLocation(cellValueString);
                                break;
                            case 6:
                            	p.setCoordinates(cellValueString);
                                break;
                            case 7:
                                p.setAccesslevel(cellValueString);
                                break;
                            case 8:
                                p.setNobridgespan(parseLongValue(cell));
                                break;
                            case 9:    
                                p.setNoofgirders(parseLongValue(cell));
                                break;
                            case 10:
                                p.setAdminName(cellValueString);
                                break;
                            case 11:
                                p.setAdminEmail(cellValueString);
                                break;
                            case 12:
                            	p.setAdminPhone(parseLongValue(cell));
                            	break;
                            	
                            case 13:
                            	p.setManagerName(cellValueString);
                            	break;
                           
                            
                            case 14:
                                p.setManagerEmail(cellValueString);
                                break;
                            
                            	
                            case 15:
                                p.setManagerPhone(parseLongValue(cell));
                                break;
                          
                            case 16:
                                p.setOwnerName(cellValueString);
                                break;
                            case 17:
                                p.setOwnerEmail(cellValueString);
                                break;
                          
                            
                            case 18:
                                p.setOwnerPhone(parseLongValue(cell));
                                break;
                           
                           
                           
                            

                            default:
                                break;
                        }
                       
                    }

                    list.add(p);
                    
                    break;
                    
                }

            } 
            }catch (Exception e) {
                e.printStackTrace();
            }
            return list;
        }
        
        private static String getCellValueAsString(Cell cell) {
            DataFormatter dataFormatter = new DataFormatter();
            return dataFormatter.formatCellValue(cell);
        }
        private static Long parseLongValue(Cell cell) {
        	 if (cell != null) {
        	        if (cell.getCellType() == CellType.NUMERIC) {
        	            return (long) cell.getNumericCellValue();
        	        } else {
        	            
        	            return null;
        	        }
        	    } else {
        	        
        	        return null;
        	    }
    }
}



