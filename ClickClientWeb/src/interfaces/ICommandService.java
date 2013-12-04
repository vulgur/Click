package interfaces;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.javart.services.*;
import org.eclipse.edt.javart.Runtime;
import org.eclipse.edt.javart.json.Json;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="ICommandService")
public class ICommandService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	public String uri;
	public ICommandService() {
		super();
	}
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	public void ezeInitialize() {
		uri = "";
	}
	@FunctionSignature(name="sendCmd", parameters={@FunctionParameter(jsonInfo=@Json(name="cmd", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN), @FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.RETURN)})
	public String sendCmd(String cmd) {
		String eze$Temp1 = "";
		return eze$Temp1;
	}
}
