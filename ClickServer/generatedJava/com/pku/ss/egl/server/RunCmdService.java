package com.pku.ss.egl.server;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.javart.services.*;
import org.eclipse.edt.javart.Runtime;
import org.eclipse.edt.javart.json.Json;
import eglx.lang.SysLib;
import com.pku.ss.egl.libs.SoundControllerLib;
import com.pku.ss.egl.libs.HotKeysControllerLib;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import com.pku.ss.egl.libs.PlayerControllerLib;
import com.pku.ss.egl.libs.MonitorControllerLib;
import org.eclipse.edt.runtime.java.eglx.lang.EBoolean;
import java.lang.Boolean;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
import com.pku.ss.egl.libs.BootControllerLib;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="RunCmdService")
public class RunCmdService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	public SoundControllerLib eze_Lib_com_pku_ss_egl_libs_SoundControllerLib;
	public HotKeysControllerLib eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib;
	public PlayerControllerLib eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib;
	public MonitorControllerLib eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib;
	public BootControllerLib eze_Lib_com_pku_ss_egl_libs_BootControllerLib;
	public RunCmdService() {
		super();
	}
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
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
	public HotKeysControllerLib eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib = (HotKeysControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.HotKeysControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib;
	}
	public PlayerControllerLib eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib = (PlayerControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.PlayerControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib;
	}
	public MonitorControllerLib eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib = (MonitorControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.MonitorControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib;
	}
	public BootControllerLib eze_Lib_com_pku_ss_egl_libs_BootControllerLib() {
		if (eze_Lib_com_pku_ss_egl_libs_BootControllerLib == null) {
			eze_Lib_com_pku_ss_egl_libs_BootControllerLib = (BootControllerLib)org.eclipse.edt.javart.Runtime.getRunUnit().loadLibrary("com.pku.ss.egl.libs.BootControllerLib");
		}
		return eze_Lib_com_pku_ss_egl_libs_BootControllerLib;
	}
	@FunctionSignature(name="playMusic", parameters={})
	public void playMusic() {
		eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib().PlayMusic();
		SysLib.writeStdout("playing music");
	}
	@FunctionSignature(name="playVideo", parameters={})
	public void playVideo() {
		eze_Lib_com_pku_ss_egl_libs_PlayerControllerLib().PlayVideo();
		SysLib.writeStdout("playing video");
	}
	@FunctionSignature(name="switchDisplay", parameters={@FunctionParameter(jsonInfo=@Json(name="value", clazz=EBoolean.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void switchDisplay(boolean value) {
		if ((EBoolean.equals(value, true))) {
			eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib().openMonitor();
			SysLib.writeStdout("Display is opened");
		}
		else {
			eze_Lib_com_pku_ss_egl_libs_MonitorControllerLib().closeMonitor();
			SysLib.writeStdout("Display is closed");
		}
	}
	@FunctionSignature(name="changeVolume", parameters={@FunctionParameter(jsonInfo=@Json(name="value", clazz=EInt.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void changeVolume(int value) {
		eze_Lib_com_pku_ss_egl_libs_SoundControllerLib().setVolume(value);
		SysLib.writeStdout((("volume is ") + org.eclipse.edt.runtime.java.eglx.lang.EString.asString(value)));
	}
	@FunctionSignature(name="left", parameters={})
	public void left() {
		eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib().left();
		SysLib.writeStdout("left key is pressed");
	}
	@FunctionSignature(name="right", parameters={})
	public void right() {
		eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib().right();
		SysLib.writeStdout("right key is pressed");
	}
	@FunctionSignature(name="backwardCmd", parameters={})
	public void backwardCmd() {
		eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib().backwardCmd();
		SysLib.writeStdout("backward is invoked");
	}
	@FunctionSignature(name="forwardCmd", parameters={})
	public void forwardCmd() {
		eze_Lib_com_pku_ss_egl_libs_HotKeysControllerLib().forwardCmd();
		SysLib.writeStdout("forward is invoked");
	}
	@FunctionSignature(name="sleep", parameters={})
	public void sleep() {
		eze_Lib_com_pku_ss_egl_libs_BootControllerLib().sleep();
		SysLib.writeStdout("Computer slept");
	}
	@FunctionSignature(name="lock", parameters={})
	public void lock() {
		eze_Lib_com_pku_ss_egl_libs_BootControllerLib().lock();
		SysLib.writeStdout("Computer locked");
	}
	@FunctionSignature(name="logOff", parameters={})
	public void logOff() {
		SysLib.callCmd("c:\\windows\\system32\\shutdown.exe -l -f");
		SysLib.writeStdout("Computer logged off");
	}
	@FunctionSignature(name="hibernate", parameters={})
	public void hibernate() {
		eze_Lib_com_pku_ss_egl_libs_BootControllerLib().hibernate();
		SysLib.writeStdout("Computer is hibernating");
	}
	@FunctionSignature(name="reboot", parameters={})
	public void reboot() {
		SysLib.callCmd("c:\\windows\\system32\\shutdown.exe -r -f");
		SysLib.writeStdout("Computer is rebooting");
	}
	@FunctionSignature(name="shutDown", parameters={})
	public void shutDown() {
		SysLib.callCmd("c:\\windows\\system32\\shutdown.exe -s -f -t 0");
		SysLib.writeStdout("Computer is shutting down");
	}
}
