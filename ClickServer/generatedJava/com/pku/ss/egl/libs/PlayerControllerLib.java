package com.pku.ss.egl.libs;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import eglx.lang.SysLib;
import com.pku.ss.egl.et.Player;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
import eglx.lang.AnyException;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="PlayerControllerLib")
public class PlayerControllerLib extends ExecutableBase {
	private static final long serialVersionUID = 10L;
	private transient Player p;
	public PlayerControllerLib() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeInitialize() {
		p = new Player();
	}
	public Player getP() {
		return p;
	}
	public void setP(Player ezeValue) {
		p = ezeValue;
	}
	public void PlayMusic() {
		try {
			Player.playMusic();
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
				SysLib.writeStderr(e.getMessageID());
				SysLib.writeStderr(e.getMessage());
			}
		}
	}
	public void PlayVideo() {
		try {
			Player.playVideo();
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
}
