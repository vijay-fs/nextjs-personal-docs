// CustomCard.js
import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
interface CustomCardProps {
    title?: string;
    description?: string;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

const CustomCard = ({ title, description, content, footer, className }: CustomCardProps) => {
    return (
        <Card className={className}>
            <CardHeader>
                {title && <CardTitle>{title}</CardTitle>}
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            {content && <CardContent>{content}</CardContent>}
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
};

export default CustomCard;
