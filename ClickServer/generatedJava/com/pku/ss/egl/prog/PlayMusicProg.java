package com.pku.ss.egl.prog;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import com.pku.ss.egl.libs.PlayerControllerLib;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="PlayMusicProg")
public class PlayMusicProg extends ProgramBase {
	private static final long serialVersionUID = 10L;
	public PlayerControllerLib eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib;
	
	public static void main(String... ezeargs) throws Exception {
		StartupInfo info = new StartupInfo( "PlayMusicProg", "com/pku/ss/egl/prog/PlayMusicProg.properties", ezeargs );
		RunUnit ru = new JSERunUnit( info );
		org.eclipse.edt.javart.Runtime.setStaticRunUnit( ru );
		ru.start( new PlayMusicProg() );
		ru.exit();
	}
	public PlayMusicProg() {
		super();
	}
	{
		if(org.eclipse.edt.javart.Runtime.getRunUnit().getActiveExecutable() == null)
		org.eclipse.edt.javart.Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	public void ezeInitialize() {
	}
	public PlayerControllerLib eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib = (PlayerControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.PlayerControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib;
	}
	public void main() {
		eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib().PlayMusic();
	}
}
