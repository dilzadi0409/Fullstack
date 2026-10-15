
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
            <Card className="w-full max-w-sm shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                        React Counter
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5 text-center">
                    <div className="rounded-xl bg-slate-100 p-6">
                        <h1 className="text-5xl font-bold">
                            {count}
                        </h1>
                    </div>

                    <div className="flex justify-center gap-3">
                        <Button onClick={() => setCount(count + 1)}>
                            + Add
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => setCount(count - 1)}
                        >
                            - Minus
                        </Button>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setCount(0)}
                    >
                        Reset Counter
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Counter;
