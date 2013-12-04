package com.pku.ss.egl.et;
import java.io.Serializable;


public class SoundControl implements Serializable {   
  
    private static final long serialVersionUID =    
                   2683028985839110062L;   
       
     //JNIµ÷ÓÃ   
    public native void setVolumeValue(long i);   
    static {   
        System.loadLibrary("soundControlDLL");   
    } 
    public native long getVolumeValue();
    static {   
        System.loadLibrary("soundControlDLL");   
    }   
         
    private static SoundControl instance = null;   
    
    public static SoundControl getInstance() {   
        if (instance == null) {
            instance = new SoundControl();
        }   
        return instance;   
    } 

    public static void main(String[] args) {   
        
    	SoundControl.getInstance().setVolumeValue(35);
    	
    } 
}  
