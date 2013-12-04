package com.pku.ss.egl.prog;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import eglx.lang.SysLib;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="PlayVideo")
public class PlayVideo extends ProgramBase {
	private static final long serialVersionUID = 10L;
	
	public static void main(String... ezeargs) throws Exception {
		StartupInfo info = new StartupInfo( "PlayVideo", "com/pku/ss/egl/prog/PlayVideo.properties", ezeargs );
		RunUnit ru = new JSERunUnit( info );
		org.eclipse.edt.javart.Runtime.setStaticRunUnit( ru );
		ru.start( new PlayVideo() );
		ru.exit();
	}
	public PlayVideo() {
		super();
	}
	{
		if(org.eclipse.edt.javart.Runtime.getRunUnit().getActiveExecutable() == null)
		org.eclipse.edt.javart.Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	public void ezeInitialize() {
	}
	public void main() {
		SysLib.startCmd("video\\Rolling In The Deep.MP4");
	}
}
