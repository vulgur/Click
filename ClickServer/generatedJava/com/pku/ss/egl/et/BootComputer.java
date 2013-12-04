package com.pku.ss.egl.et;
import java.io.Serializable;

  
public class BootComputer implements Serializable {   
  
    private static final long serialVersionUID =    
                   2683028985839110062L;   
       
     //JNI调用   
    public native void switchBoot(int i);
    static{
    	System.loadLibrary("switchBootDLL");
    }
    public void shutDown()//关机
    {
    	switchBoot(1);
    }
    public void logOff()//注销
    {
    	switchBoot(2);
    }
    public void reboot()//重启
    {
    	switchBoot(3);
    }
    public void lock()//锁定
    {
    	switchBoot(4);
    }
    public void hibernate()//休眠
    {
    	switchBoot(5);
    }
    public void sleep()//待机
    {
    	switchBoot(6);
    }
    private static BootComputer instance = null;   
    
    public static BootComputer getInstance() {   
        if (instance == null) {
            instance = new BootComputer();
        }   
        return instance;   
    } 
//    public static void main(String[] args) {   
//           
//    	BootComputer soundControl = new BootComputer();   
//        soundControl.shutDown();
//    	
//    }   
    


  
}  
