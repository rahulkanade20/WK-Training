// interface segregation principle

public class IS {
    
}

interface BearKeeper {
    void washTheBear();
    void feedTheBear();
    void petTheBear();
}

interface BearCleaner {
    void washTheBear();
}

interface BearFeeder {
    void feedTheBear();
}

interface BearPetter {
    void petTheBear();
}

class Person implements BearCleaner, BearFeeder {

    public void washTheBear() {
        System.out.println("Wash the bear");
    }

    public void feedTheBear() {
        System.out.println("Feed the bear");
    }
}