package com.pku.ss.egl.et;

import java.io.IOException;

public class Player {

	public static String getPath() {
		String path = Player.class.getClassLoader().getResource("").getPath();
		path = path.substring(1, path.lastIndexOf("WEB-INF"));
		System.out.println(path);
		return path;
	}

	public static void playMusic() throws IOException {

		Runtime.getRuntime().exec(
				"cmd.exe /C " + getPath() + "music/Flourishing.mp3");

	}

	public static void playVideo() throws IOException {

		Runtime.getRuntime().exec(
				"cmd.exe /C start " + getPath() + "video/video.mp4");

	}
//	public Player(){}
	
//	private static Player instance = null;
//
//	public static Player getInstance() {
//		if (instance == null) {
//			instance = new Player();
//		}
//		return instance;
//	}
//	 public static void main(String[] args) throws IOException {
//	 // TODO Auto-generated method stub
//	 Player p = new Player();
//	 System.out.println(p.getPath());
//	 }

}
