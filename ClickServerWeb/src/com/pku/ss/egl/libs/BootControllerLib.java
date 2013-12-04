package com.pku.ss.egl.libs;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import com.pku.ss.egl.et.BootComputer;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="BootControllerLib")
public class BootControllerLib extends ExecutableBase {
	private static final long serialVersionUID = 10L;
	private BootComputer bc;
	public BootControllerLib() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeInitialize() {
		bc = new BootComputer();
	}
	public BootComputer getBc() {
		return bc;
	}
	public void setBc(BootComputer ezeValue) {
		bc = ezeValue;
	}
	public void sleep() {
		bc.sleep();
	}
	public void shutDown() {
		bc.shutDown();
	}
	public void lock() {
		bc.lock();
	}
	public void logOff() {
		bc.logOff();
	}
	public void hibernate() {
		bc.hibernate();
	}
	public void reboot() {
		bc.reboot();
	}
}
