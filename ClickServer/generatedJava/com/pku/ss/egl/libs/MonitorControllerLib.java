package com.pku.ss.egl.libs;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import com.pku.ss.egl.et.Monitor;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="MonitorControllerLib")
public class MonitorControllerLib extends ExecutableBase {
	private static final long serialVersionUID = 10L;
	private Monitor monitor;
	public MonitorControllerLib() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeInitialize() {
		monitor = new Monitor();
	}
	public Monitor getMonitor() {
		return monitor;
	}
	public void setMonitor(Monitor ezeValue) {
		monitor = ezeValue;
	}
	public void openMonitor() {
		monitor.openMonitor();
	}
	public void closeMonitor() {
		monitor.closeMonitor();
	}
}
