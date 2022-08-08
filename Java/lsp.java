// liskovs substitution principle

public class lsp {
    
}

class parent {

    public static float foo(int a) {

        int b = 5;

        return a;
    }
}

class child extends parent {

    public static int foo(float a) {

        int c = 4;

        return c;
    }
}
