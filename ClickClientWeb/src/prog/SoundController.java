package prog;
import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.EAny;
import java.lang.Object;
@SuppressWarnings("unused")
@javax.xml.bind.annotation.XmlRootElement(name="SoundController")
public class SoundController extends ProgramBase {
	private static final long serialVersionUID = 10L;
	private static final String ezeConst_constantName = "literalString";
	public final String constantName = ezeConst_constantName;
	public String variableName;
	
	public static void main(String... ezeargs) throws Exception {
		StartupInfo info = new StartupInfo( "SoundController", "prog/SoundController.properties", ezeargs );
		RunUnit ru = new JSERunUnit( info );
		org.eclipse.edt.javart.Runtime.setStaticRunUnit( ru );
		ru.start( new SoundController() );
		ru.exit();
	}
	public SoundController() {
		super();
	}
	{
		if(org.eclipse.edt.javart.Runtime.getRunUnit().getActiveExecutable() == null)
		org.eclipse.edt.javart.Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	public void ezeInitialize() {
		variableName = "";
	}
	public void main() {
	}
}
