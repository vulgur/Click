package com.pku.ss.egl.prog;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="TestMusic")
public class TestMusic extends ProgramBase {
	private static final long serialVersionUID = 10L;
	
	public static void main(String... ezeargs) throws Exception {
		StartupInfo info = new StartupInfo( "TestMusic", "com/pku/ss/egl/prog/TestMusic.properties", ezeargs );
		RunUnit ru = new JSERunUnit( info );
		org.eclipse.edt.javart.Runtime.setStaticRunUnit( ru );
		ru.start( new TestMusic() );
		ru.exit();
	}
	public TestMusic() {
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
	}
}
