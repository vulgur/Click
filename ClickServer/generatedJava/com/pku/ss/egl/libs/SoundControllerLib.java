package com.pku.ss.egl.libs;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import com.pku.ss.egl.et.SoundControl;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="SoundControllerLib")
public class SoundControllerLib extends ExecutableBase {
	private static final long serialVersionUID = 10L;
	private transient SoundControl sc;
	public SoundControllerLib() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeInitialize() {
		sc = new SoundControl();
	}
	public SoundControl getSc() {
		return sc;
	}
	public void setSc(SoundControl ezeValue) {
		sc = ezeValue;
	}
	public void setVolume(int value) {
		long eze$Temp1;
		eze$Temp1 = value;
		sc.setVolumeValue(eze$Temp1);
	}
}
