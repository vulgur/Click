package com.pku.ss.egl.et;
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.IOException;

public class HotKeys {
	public static void esc()throws IOException,
	ClassNotFoundException, InterruptedException, AWTException
	{
		Robot robot=new Robot();
		robot.keyPress(KeyEvent.VK_ESCAPE);
		Thread.sleep(10);
		robot.keyPress(KeyEvent.VK_ESCAPE);
		Thread.sleep(10);
	}
//	public static void shiftAnd5()throws IOException,
//	ClassNotFoundException, InterruptedException, AWTException
//	{
//		Robot robot=new Robot();
//		robot.keyPress(KeyEvent.VK_SHIFT);
//		Thread.sleep(20);
//		robot.keyPress(KeyEvent.VK_F5);
//		Thread.sleep(10);
//		robot.keyRelease(KeyEvent.VK_F5);
//		robot.keyRelease(KeyEvent.VK_SHIFT);
//		Thread.sleep(10);
//	}
	public static void left()throws IOException,
	ClassNotFoundException, InterruptedException, AWTException
	{
		Robot robot=new Robot();
		robot.keyPress(KeyEvent.VK_LEFT);
		Thread.sleep(10);
		robot.keyRelease(KeyEvent.VK_LEFT);
		Thread.sleep(10);
	}
	public static void right()throws IOException,
	ClassNotFoundException, InterruptedException, AWTException
	{
		Robot robot=new Robot();
		robot.keyPress(KeyEvent.VK_RIGHT);
		Thread.sleep(10);
		robot.keyRelease(KeyEvent.VK_RIGHT);
		Thread.sleep(10);
	}
	public static void forward()throws IOException,
	ClassNotFoundException, InterruptedException, AWTException
	{
		Robot robot=new Robot();
		robot.keyPress(KeyEvent.VK_ALT);
		Thread.sleep(20);
		robot.keyPress(KeyEvent.VK_RIGHT);
		Thread.sleep(10);
		robot.keyRelease(KeyEvent.VK_RIGHT);
		robot.keyRelease(KeyEvent.VK_ALT);
		Thread.sleep(10);
	}
	public static void backward()throws IOException,
	ClassNotFoundException, InterruptedException, AWTException
	{
		Robot robot=new Robot();
		robot.keyPress(KeyEvent.VK_ALT);
		Thread.sleep(20);
		robot.keyPress(KeyEvent.VK_LEFT);
		Thread.sleep(10);
		robot.keyRelease(KeyEvent.VK_LEFT);
		robot.keyRelease(KeyEvent.VK_ALT);
		Thread.sleep(10);
	}
	
    private static HotKeys instance = null;   
    
    public static HotKeys getInstance() {   
        if (instance == null) {
            instance = new HotKeys();
        }   
        return instance;   
    } 
//	public static void main(String[] args) throws IOException,
//	ClassNotFoundException, InterruptedException, AWTException{
//		HotKeys hotKeys=new HotKeys();
//		Thread.sleep(5000);
//		hotKeys.shiftAnd5();
//		Thread.sleep(5000);
//		hotKeys.esc();
//		Thread.sleep(5000);
//		hotKeys.left();
//		Thread.sleep(5000);
//		hotKeys.right();
//
//	}
}
