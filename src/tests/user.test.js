import { prismaMock } from "../database/singleton";
import { User } from "../models/user";

test("should create new user ", async () => {
    const user = new User({
        name: "Rich",
        email: "hello@prisma.io",
        password: "123",
        cpf: "11111111111",
    });

    prismaMock.user.create.mockResolvedValue(user);

    await expect(prismaMock.user.create(user)).resolves.toEqual({
        name: "Rich",
        email: "hello@prisma.io",
        password: user.password,
        cpf: "11111111111",
    });
});

test("should update user ", async () => {
    const user = new User({
        id: 1,
        name: "Rich",
        email: "hello@prisma.ioa",
        password: "1234",
        cpf: "11111111111",
    });

    prismaMock.user.update.mockResolvedValue(user);

    await expect(prismaMock.user.update(user)).resolves.toEqual({
        name: "Rich",
        email: "hello@prisma.ioa",
        password: user.password,
        cpf: "11111111111",
    });
});

test("should login user ", async () => {
    const user = {
        cpf: "11111111111",
        password: "1234",
    };

    prismaMock.user.findFirst({
        where: {
            cpf: user.cpf
        }
    }).mockResolvedValue(user);

    await expect(prismaMock.user.(user)).resolves.toEqual({
        name: "Rich",
        email: "hello@prisma.ioa",
        password: user.password,
        cpf: "11111111111",
    });
});
