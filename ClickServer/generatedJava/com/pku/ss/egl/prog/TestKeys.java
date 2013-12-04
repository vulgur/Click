package com.pku.ss.egl.prog;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import com.pku.ss.egl.libs.HotKeysControllerLib;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="TestKeys")
public class TestKeys extends ProgramBase {
	private static final long serialVersionUID = 10L;
	public HotKeysControllerLib eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib;
	
	public static void main(String... ezeargs) throws Exception {
		StartupInfo info = new StartupInfo( "TestKeys", "com/pku/ss/egl/prog/TestKeys.properties", ezeargs );
		RunUnit ru = new JSERunUnit( info );
		org.eclipse.edt.javart.Runtime.setStaticRunUnit( ru );
		ru.start( new TestKeys() );
		ru.exit();
	}
	public TestKeys() {
		super();
	}
	{
		if(org.eclipse.edt.javart.Runtime.getRunUnit().getActiveExecutable() == null)
		org.eclipse.edt.javart.Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	public void ezeInitialize() {
	}
	public HotKeysControllerLib eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib = (HotKeysControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.HotKeysControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib;
	}
	public void main() {
		eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib().left();
		eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib().backwardCmd();
	}
}
