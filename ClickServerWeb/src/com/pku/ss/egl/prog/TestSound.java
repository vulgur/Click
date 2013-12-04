package com.pku.ss.egl.prog;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import com.pku.ss.egl.libs.SoundControllerLib;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="TestSound")
public class TestSound extends ProgramBase {
	private static final long serialVersionUID = 10L;
	public SoundControllerLib eze_Lib_com_pku_ss_egl_libs_SoundControllerLib;
	
	public static void main(String... ezeargs) throws Exception {
		StartupInfo info = new StartupInfo( "TestSound", "com/pku/ss/egl/prog/TestSound.properties", ezeargs );
		RunUnit ru = new JSERunUnit( info );
		org.eclipse.edt.javart.Runtime.setStaticRunUnit( ru );
		ru.start( new TestSound() );
		ru.exit();
	}
	public TestSound() {
		super();
	}
	{
		if(org.eclipse.edt.javart.Runtime.getRunUnit().getActiveExecutable() == null)
		org.eclipse.edt.javart.Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	public void ezeInitialize() {
	}
	public SoundControllerLib eze_Lib_com_pku_ss_egl_libs_SoundControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_SoundControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_SoundControllerLib = (SoundControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.SoundControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_SoundControllerLib;
	}
	public void main() {
		eze_Lib_com_pku_ss_egl_libs_SoundControllerLib().setVolume(100);
	}
}
