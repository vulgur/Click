package com.pku.ss.egl.et;
import java.io.Serializable;
  

  
public class Monitor implements Serializable {   
  
    private static final long serialVersionUID =    
                   2683028985839110062L;   
       
     //JNIµ÷ÓÃ    
    public native void openMonitor();   
    static {   
        System.loadLibrary("monitorDLL");   
    } 
    public native void closeMonitor();
    static {   
        System.loadLibrary("monitorDLL");   
    }   
        
    private static Monitor instance = null;   
    
    public static Monitor getInstance() {   
        if (instance == null) {
            instance = new Monitor();
        }   
        return instance;   
    } 
//    public static void main(String[] args) {   
//           
//    	Monitor soundControl = new Monitor();   
//        soundControl.closeMonitor();
//        try {
//			Thread.sleep(10000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//    	soundControl.openMonitor();
//    }   
    
}  
