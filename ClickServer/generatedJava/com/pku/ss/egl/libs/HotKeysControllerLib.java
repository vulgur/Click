package com.pku.ss.egl.libs;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import eglx.lang.SysLib;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
import eglx.lang.AnyException;
import com.pku.ss.egl.et.HotKeys;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="HotKeysControllerLib")
public class HotKeysControllerLib extends ExecutableBase {
	private static final long serialVersionUID = 10L;
	private transient HotKeys hk;
	public HotKeysControllerLib() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeInitialize() {
		hk = new HotKeys();
	}
	public HotKeys getHk() {
		return hk;
	}
	public void setHk(HotKeys ezeValue) {
		hk = ezeValue;
	}
	public void left() {
		try {
			HotKeys.left();
		}
		catch ( java.lang.Exception eze$Temp1 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp1 );
			AnyException e;
			if ( eze$Temp1 instanceof AnyException ) {
				e = (AnyException)eze$Temp1;
			}
			else {
				e = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp1);
			}
			{
				SysLib.writeStderr(e.getMessage());
			}
		}
	}
	public void right() {
		try {
			HotKeys.right();
		}
		catch ( java.lang.Exception eze$Temp2 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp2 );
			AnyException e;
			if ( eze$Temp2 instanceof AnyException ) {
				e = (AnyException)eze$Temp2;
			}
			else {
				e = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp2);
			}
			{
				SysLib.writeStderr(e.getMessage());
			}
		}
	}
	public void backwardCmd() {
		try {
			HotKeys.backward();
		}
		catch ( java.lang.Exception eze$Temp3 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp3 );
			AnyException e;
			if ( eze$Temp3 instanceof AnyException ) {
				e = (AnyException)eze$Temp3;
			}
			else {
				e = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp3);
			}
			{
				SysLib.writeStderr(e.getMessage());
			}
		}
	}
	public void forwardCmd() {
		try {
			HotKeys.forward();
		}
		catch ( java.lang.Exception eze$Temp4 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp4 );
			AnyException e;
			if ( eze$Temp4 instanceof AnyException ) {
				e = (AnyException)eze$Temp4;
			}
			else {
				e = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp4);
			}
			{
				SysLib.writeStderr(e.getMessage());
			}
		}
	}
}
